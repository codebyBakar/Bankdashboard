const DonutChartpg5 = () => {
  const data = [
    { name: "ABM Bank", color: "#16DBCC", value: 95 },
    { name: "BRC Bank", color: "#FF82AC", value: 65 },
    { name: "MCP Bank", color: "#FFBB38", value: 73 },
    { name: "DBL Bank", color: "#3464F3", value: 92 },
  ];

  const cx = 50;
  const cy = 50;
  const strokeWidth = 20;
  const radius = 30;
  const dashArray = 2 * Math.PI * radius;
  const startAngle = -90;

  let filled = 0;
  const sum = data.reduce((sum, item) => sum + item.value, 0);
  const ratio = 100 / sum;

  const processedData = data.map((obj) => {
    const itemRatio = ratio * obj.value;
    const item = {
      ...obj,
      itemRatio,
      angle: (filled * 360) / 100 + startAngle,
      offset: dashArray - (dashArray * itemRatio) / 100,
    };
    filled += itemRatio;
    return item;
  });

  // 🔹 Inline Styles
  const styles = {
  
   
   
    donutChart: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    itemsNames: {
      maxWidth: "250px",
      display: "flex",
      flexWrap: "wrap",
      padding: 0,
      listStyle: "none",
      marginTop: "10px",
      justifyContent: "center",
    },
    itemName: {
      minWidth: "70px",
      marginRight: "10px",
      marginBottom: "5px",
      paddingLeft: "25px",
      fontSize: "16px",
      fontWeight: 600,
      color: "#05103b",
    },
   
  };

  return (
      <div style={styles.card}>

        <div style={styles.donutChart}>
          <svg width="100%" height="200px" viewBox="0 0 100 100">
            {processedData.map((item, index) => (
              <circle
                key={index}
                cx={cx}
                cy={cy}
                r={radius}
                fill="transparent"
                strokeWidth={strokeWidth}
                stroke={item.color}
                strokeDasharray={dashArray}
                strokeDashoffset={item.offset}
                transform={`rotate(${item.angle} ${cx} ${cy})`}
                style={{ transition: "stroke-width 0.3s" }}
                onMouseEnter={(e) => (e.target.style.strokeWidth = 22)}
                onMouseLeave={(e) => (e.target.style.strokeWidth = 20)}
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from={`${startAngle} ${cx} ${cy}`}
                  to={`${item.angle} ${cx} ${cy}`}
                  dur="1s"
                  fill="freeze"
                />
                <title>
                  {item.name}: {item.value}
                </title>
              </circle>
            ))}
          </svg>

          <ul style={styles.itemsNames}>
            {data.map((item, index) => (
              <li
                key={index}
                style={{
                  ...styles.itemName,
                  background: `linear-gradient(90deg, ${item.color} 0, ${item.color} 20px, transparent 20px, transparent 100%)`,
             


                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        
      </div>
    
  );
};

export default DonutChartpg5;
