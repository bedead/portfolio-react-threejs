import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const percentageStyle = {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: 800,
    marginTop: 40,
  };

  return (
    <Html as='div' center style={containerStyle}>
      <span className='canvas-loader'></span>
      <p style={percentageStyle}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
