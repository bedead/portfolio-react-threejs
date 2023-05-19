import * as THREE from "three"
import { Suspense, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, useGLTF } from "@react-three/drei"
import { EffectComposer, SSAO } from "@react-three/postprocessing"
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier"

import cap from '../../assets/cap.glb?url'
import CanvasLoader from "../Loader"

const baubleMaterial = new THREE.MeshStandardMaterial({ color: "#c0a0a0" });
const capMaterial = new THREE.MeshStandardMaterial({ metalness: 0.75, roughness: 0.15, color: "#8a492f", emissive: "#600000" })
const sphereGeometry = new THREE.SphereGeometry(1, 12, 12)
const baubles = [...Array(3)].map(() => ({ scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)] }))

function Bauble({ scale, r = THREE.MathUtils.randFloatSpread }) {
	const { nodes } = useGLTF(cap);
	useEffect(() => {
		return () => {
			nodes?.Mesh_1?.geometry.dispose();
			nodes?.Mesh_1?.material?.dispose();
		};
	}, []);
	const api = useRef()
	useFrame((state, delta) => {
		delta = Math.min(0.1, delta);
		const impulseVector = new THREE.Vector3();
		api.current.applyImpulse(
			impulseVector
				.copy(api.current.translation())
				.normalize()
				.multiplyScalar(-50 * delta * scale),
			impulseVector
				.copy(api.current.translation())
				.normalize()
				.multiplyScalar(-150 * delta * scale),
			impulseVector
				.copy(api.current.translation())
				.normalize()
				.multiplyScalar(-50 * delta * scale)
		);
	}, []);
	return (
		<Suspense fallback={<CanvasLoader />} >
			<RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false} dispose={null}>
				<BallCollider args={[scale]} />
				<CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
				<mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={baubleMaterial} />
				<mesh castShadow scale={2.5 * scale} position={[0, 0, -1.8 * scale]} geometry={nodes.Mesh_1.geometry} material={capMaterial} />
			</RigidBody>
		</Suspense>
	)
}


const FallingBalls = () => {
	return (<Canvas
		gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
		camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
		onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
	>
		<ambientLight intensity={1} />
		<spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[512, 512]} />
		<directionalLight position={[0, 5, -4]} intensity={4} />
		<directionalLight position={[0, -15, -0]} intensity={4} color="red" />
		<Physics gravity={[0, 0, 0]}>
			{baubles.map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */}
		</Physics>
		<EffectComposer multisampling={0}>
			<SSAO samples={11} radius={0.15} intensity={20} luminanceInfluence={0.6} color="red" />
			<SSAO samples={21} radius={0.03} intensity={15} luminanceInfluence={0.6} color="red" />
		</EffectComposer>
	</Canvas>
	)
}

export default FallingBalls;