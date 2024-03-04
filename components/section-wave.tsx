import type { NextPage } from "next";
import { memo, useEffect, useRef, useState } from "react";
import pathLines from "./section-wave-lines";
import styles from "./section-wave-lines.module.scss";
import VerticalProgressBar from "./ui/VerticalProgressBar";

type WaveContent = {
  bold?: string;
  description: string;
  count: number;
  type: "percent" | "scale";
};

const SectionWave: NextPage = memo(() => {
  const waveLineRef = useRef();
  const [wave, setWave] = useState(1);
  const [init, setInit] = useState(false);

  const waveContent: WaveContent[] = [
    {
      description: "of patients with improved quality of life ",
      count: 93,
      type: "percent",
    },
    {
      description: "of patients reduced at least one medication ",
      count: 72,
      type: "percent",
    },
    {
      bold: "Lower anxiety and depression symptoms",
      description: "after improving exercise and sleep scores.",
      count: 80,
      type: "scale",
    },
    {
      description: "of patients consumed more fruits and vegetables ",
      count: 87,
      type: "percent",
    },
    {
      description:
        "reduction in LDL cholesterol in those with improved lifestyle scores ",
      count: 15,
      type: "percent",
    },
    {
      bold: "Better blood glucose values with improved",
      description: "exercise scores by reducing sedentary time.",
      count: 75,
      type: "scale",
    },
    {
      description: " of patients showed improvements in mental health score",
      count: 84,
      type: "percent",
    },
  ];

  const waveHoverHandler = (e, index) => {
    if (index <= 4) {
      console.log(index + 1);
      setWave(index + 1);
    }
  };

  useEffect(() => {
    Object.keys(waveContent).map((_, index) => {
      waveLineRef[index + 1].addEventListener("click", (e) =>
        waveHoverHandler(e, index)
      );
      waveLineRef[index + 1].addEventListener("mouseover", (e) =>
        waveHoverHandler(e, index)
      );
    });
    setInit(true);
  }, []);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const changeLineWave = async (original, index, changed) => {
    const partsOriginal = original?.attributes
      ?.getNamedItem("d")
      .value.split(" ");

    const partsChanged = changed.d.split(" ");
    const partsTarget = [...partsOriginal];

    // console.log(partsChanged, "partsChanged");
    // console.log(partsOriginal, "partsOriginal");
    // console.log(
    //   "___________________________________________________________________",
    //   index
    // );
    // console.log(partsTarget.join(" "), 'partsTarget');
  };

  useEffect(() => {
    if (wave <= 5 && init) {
      Array(17)
        .fill(null)
        .forEach((_, index) => {
          const line = document.getElementById(`lineWave${index + 1}`);
          // console.log(line,  pathLines[wave]);
          if (line) {
            changeLineWave(line, index, pathLines[wave][index]);
          }
        });
    }
  }, [wave, init]);

  return (
    <section className={styles.sectionwave} id="SectionWave">
      <div className={styles.wave} data-state={1}>
        <div className={styles.groupIcon} data-state={1}>
          <svg
            className={styles.iconSVG}
            width="1918"
            height="380"
            viewBox="0 0 1918 380"
            version="1.1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
          >
            <path
              id="lineWave1"
              d="M1916.97 136.5C1838.29 139.44 1805.53 126.82 1786.46 183.96C1767.56 240.59 1771.79 312.42 1735.54 305.64C1644.14 288.56 1707.28 128.84 1622.44 83.4598C1577.07 59.1898 1532.58 107.05 1476.32 116.97C1441.47 123.11 1381.18 112.07 1338.02 127.01C1298.85 140.57 1276.51 177.73 1247.89 180.24C1191.45 185.19 1152.81 79.9898 1096.98 109.58C1029.58 145.29 1074.71 297.45 1034.56 344.13C1011.48 370.96 946.965 393.07 897.416 369.53C853.687 348.76 850.257 270.56 812.197 215.43C733.259 101.08 621.41 155.84 546.951 176.52C469.193 198.12 479.202 109.12 359.994 70.2598C267.496 40.0998 215.637 60.3898 214.347 104.12C212.557 164.67 204.327 262.01 167.777 266.29C127.908 270.97 123.308 163.37 -3 125.96"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave2"
              d="M-2.93994 130.82C115.478 165.89 123.068 264.68 165.107 260.19C201.837 256.27 211.567 165.14 215.607 109.07C218.607 68.5998 269.206 50.3698 358.434 79.8098C374.124 84.9998 387.604 91.0698 399.384 97.6398C473.573 139.1 476.983 199.12 541.792 182.88C577.281 173.98 619.87 157.95 663.03 154.58C711.269 150.75 760.428 162.31 801.077 216.94C838.347 267.26 843.287 338.49 885.766 356.3C902.076 363.14 919.916 365.25 937.355 363.78C971.035 361.03 1002.97 345.43 1017.99 328C1058.74 280.75 1018.99 135.64 1084.47 102.85C1139.85 75.1198 1177.76 178.71 1233.38 177.29C1261.65 176.65 1284.38 143.14 1323.67 130.53C1332.54 127.69 1342.12 125.8 1352.07 124.52C1391.18 119.46 1433.19 122.8 1460.09 116.36C1484.33 110.55 1506.38 98.0398 1528.32 88.6998C1555.15 77.2698 1579.86 70.1598 1604.62 84.2398C1631.71 99.6298 1643.9 126.72 1650.97 156.14C1665.55 217.14 1658.55 292.52 1722.97 299.58C1761.01 303.61 1760.51 235.44 1781.93 182.2C1803.35 128.96 1837.72 141.07 1916.95 139.35"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave3"
              d="M-2.89001 135.67C107.628 168.4 118.218 258.37 162.437 254.07C199.337 250.49 210.457 165.58 216.867 114C221.496 76.78 270.916 60.61 356.884 89.33C372.084 94.43 385.234 100.36 396.834 106.79C469.053 146.92 474.293 203.12 536.642 189.21C572.221 181.27 613.5 166.73 655.07 163.38C702.189 159.47 750.178 169.02 789.978 218.41C826.577 263.83 832.857 328.18 874.126 343.03C889.866 348.7 906.946 350.15 923.706 348.21C955.965 344.47 986.615 329.01 1001.44 311.83C1042.77 264.01 1008.45 125.98 1071.98 96.08C1126.95 70.21 1164.1 172.04 1218.89 174.31C1246.82 175.47 1269.93 145.68 1309.35 134.03C1318.24 131.4 1327.85 129.6 1337.85 128.28C1377.6 123.02 1417.81 123.73 1443.9 115.72C1467.29 108.53 1488.66 95.46 1511.02 86.53C1537.91 75.79 1562.46 70.28 1586.84 84.99C1613.46 101.03 1625.9 128.41 1633.34 157.2C1648.57 216.7 1643.31 291.11 1710.45 293.49C1750.27 294.9 1753.47 230.29 1777.46 180.41C1801.37 130.67 1837.21 142.67 1917 142.17"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave4"
              d="M-2.82996 140.52C99.7984 170.91 113.378 252.04 159.787 247.96C196.857 244.7 209.417 166.03 218.137 118.94C224.426 84.9601 272.636 70.8701 355.334 98.8601C370.034 103.87 382.874 109.67 394.284 115.95C464.543 154.75 471.653 207.22 531.492 195.55C567.201 188.59 607.141 175.53 647.1 172.19C693.099 168.19 739.868 175.78 778.868 219.9C814.727 260.46 822.377 317.88 862.477 329.78C877.626 334.28 893.956 335.1 910.046 332.66C940.895 327.98 970.245 312.6 984.875 295.68C1026.79 247.3 997.934 116.38 1059.46 89.3201C1114.04 65.3201 1150.41 165.47 1204.37 171.33C1231.96 174.33 1255.45 148.22 1294.99 137.52C1303.91 135.1 1313.53 133.39 1323.58 132.04C1363.96 126.58 1402.37 124.67 1427.66 115.08C1450.2 106.53 1470.89 92.8701 1493.68 84.3501C1520.62 74.2801 1545.02 70.3901 1569.01 85.7301C1595.19 102.42 1607.86 130.09 1615.66 158.25C1631.55 216.26 1628.03 289.56 1697.87 287.4C1739.48 286.11 1746.33 225.18 1772.92 178.62C1799.18 132.62 1836.63 144.26 1916.97 144.99"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave5"
              d="M-2.78003 145.38C91.9585 173.43 108.528 245.71 157.117 241.86C194.357 238.91 208.367 166.48 219.397 123.89C227.356 93.1497 274.346 81.1297 353.774 108.41C367.984 113.33 380.494 119 391.724 125.13C460.013 162.6 469.053 211.43 526.332 201.91C562.201 195.95 600.771 184.42 639.12 181.02C684.019 177.04 729.529 182.56 767.748 221.41C802.867 257.1 811.827 307.61 850.817 316.55C865.366 319.88 880.966 320.07 896.376 317.13C925.806 311.51 953.865 296.21 968.305 279.54C1010.81 230.59 987.455 106.83 1046.95 82.5797C1101.18 60.4797 1136.74 158.93 1189.85 168.37C1217.1 173.21 1240.97 150.79 1280.64 141.03C1289.59 138.83 1299.23 137.2 1309.33 135.82C1350.35 130.16 1386.95 125.65 1411.44 114.46C1433.13 104.55 1453.13 90.2897 1476.36 82.1997C1503.34 72.7997 1527.6 70.5297 1551.2 86.5097C1576.92 103.85 1589.85 131.81 1598.01 159.33C1614.55 215.85 1612.79 288.01 1685.33 281.33C1728.74 277.33 1739.18 220.12 1768.42 176.85C1796.97 134.6 1836.09 145.88 1916.98 147.83"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave6"
              d="M-2.71997 150.23C84.1187 175.95 103.678 239.36 154.458 235.75C191.857 233.09 207.337 166.91 220.667 128.84C230.296 101.33 276.066 91.3996 352.224 117.95C365.934 122.77 378.124 128.31 389.174 134.29C455.493 170.43 466.503 215.73 521.182 208.25C557.241 203.31 594.411 193.23 631.16 189.83C674.939 185.78 719.199 189.31 756.648 222.89C791.008 253.71 801.238 297.34 839.177 303.29C853.097 305.47 867.986 305.01 882.716 301.57C910.726 295.02 937.495 279.8 951.735 263.38C994.834 213.87 977.015 97.3196 1034.44 75.8196C1088.36 55.6396 1123.07 152.38 1175.34 165.39C1202.26 172.09 1226.5 153.33 1266.29 144.52C1275.27 142.53 1284.93 140.98 1295.07 139.57C1336.72 133.7 1371.53 126.6 1395.21 113.82C1416.05 102.57 1435.36 87.6896 1459.03 80.0296C1486.05 71.2796 1510.17 70.6496 1533.38 87.2596C1558.64 105.25 1571.88 133.48 1580.36 160.39C1597.68 215.38 1597.56 286.43 1672.77 275.24C1717.98 268.52 1731.94 215.04 1763.91 175.06C1794.68 136.57 1835.54 147.48 1916.98 150.65"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave7"
              d="M-2.67004 155.08C76.2787 178.46 98.8184 232.99 151.788 229.64C189.347 227.26 206.297 167.33 221.926 133.78C233.236 109.49 277.776 101.65 350.674 127.48C363.894 132.21 375.754 137.62 386.624 143.45C450.983 178.26 463.983 220.14 516.032 214.59C552.301 210.72 588.051 202.04 623.19 198.64C665.86 194.52 708.849 196.05 745.538 224.38C779.128 250.32 790.588 287.11 827.527 290.04C840.797 291.09 854.997 289.97 869.056 286.02C895.636 278.55 921.126 263.39 935.175 247.23C978.855 197.15 966.635 87.87 1021.93 69.07C1075.57 50.84 1109.4 145.86 1160.83 162.42C1187.41 170.98 1212.03 155.88 1251.95 148.02C1260.95 146.25 1270.64 144.78 1280.83 143.34C1323.12 137.27 1356.12 127.59 1378.99 113.19C1398.98 100.6 1417.6 85.08 1441.7 77.87C1468.76 69.77 1492.74 70.78 1515.56 88.02C1540.36 106.65 1553.86 135.17 1562.69 161.46C1580.67 214.95 1582.3 284.84 1660.2 269.17C1707.2 259.72 1724.61 209.98 1759.38 173.29C1792.3 138.55 1834.97 149.09 1916.97 153.49"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave8"
              d="M-2.60999 159.94C68.4389 180.98 93.9685 226.61 149.128 223.54C186.857 221.43 205.287 167.74 223.186 138.73C236.196 117.65 279.486 111.92 349.115 137.03C361.834 141.67 373.374 146.95 384.064 152.63C446.453 186.11 461.493 224.68 510.882 220.95C547.381 218.19 581.681 210.86 615.22 207.47C656.77 203.28 698.479 202.81 734.428 225.88C767.238 246.94 780.108 272.71 815.877 276.79C828.407 278.22 842.007 274.93 855.397 270.47C880.556 262.09 904.756 246.99 918.606 231.08C962.875 180.43 956.275 78.4798 1009.42 62.3198C1062.81 46.0798 1095.73 139.35 1146.32 159.45C1172.56 169.88 1197.56 158.43 1237.6 151.53C1246.63 149.97 1256.34 148.59 1266.57 147.11C1309.49 140.84 1340.69 128.59 1362.76 112.56C1381.91 98.6498 1399.82 82.4698 1424.37 75.6998C1451.46 68.2298 1475.31 70.8998 1497.74 88.7698C1522.08 108.05 1535.83 136.86 1545.03 162.52C1563.67 214.51 1567.05 283.23 1647.65 263.08C1696.45 250.89 1717.23 204.87 1754.87 171.5C1789.87 140.47 1834.42 150.69 1916.97 156.31"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave9"
              d="M-2.56006 164.79C60.599 183.49 89.1085 220.22 146.458 217.42C184.347 215.58 204.297 168.14 224.446 143.66C239.166 125.79 281.246 122.02 347.554 146.55C359.794 151.08 371.004 156.24 381.504 161.78C441.933 193.93 459.213 222.65 505.722 227.28C542.331 230.92 575.311 219.65 607.25 216.28C647.69 212.01 688.079 209.55 723.309 227.37C755.308 243.55 769.118 266.87 804.227 263.54C816.157 262.41 829.027 259.89 841.737 254.92C865.476 245.63 888.386 230.58 902.046 214.93C946.905 163.72 945.965 69.1601 996.924 55.5701C1050.09 41.3801 1082.07 132.86 1131.82 156.48C1157.73 168.78 1183.09 160.98 1223.26 155.03C1232.32 153.69 1242.05 152.39 1252.33 150.88C1295.89 144.41 1325.3 129.6 1346.55 111.93C1364.86 96.7101 1382.06 79.8501 1407.06 73.5401C1434.18 66.6901 1457.9 71.0301 1479.94 89.5301C1503.82 109.46 1517.82 138.56 1527.38 163.59C1546.68 214.09 1551.8 281.61 1635.1 257.01C1685.69 242.07 1709.79 199.73 1750.37 169.73C1787.38 142.37 1833.88 152.31 1916.98 159.15"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave10"
              d="M-2.5 169.64C52.7591 186.01 84.2586 213.8 143.798 211.31C181.847 209.72 203.347 168.55 225.716 148.61C242.166 133.95 282.966 132.28 346.005 156.09C357.744 160.53 368.634 165.56 378.944 170.95C437.403 201.77 456.993 227.55 500.562 233.63C537.222 238.74 568.941 228.45 599.271 225.1C638.59 220.75 677.639 216.32 712.189 228.87C743.348 240.19 758.338 256.89 792.568 250.3C803.817 248.14 816.027 244.87 828.067 239.38C850.377 229.2 872.006 214.18 885.466 198.79C930.915 147.01 935.665 59.9298 984.395 48.8298C1037.38 36.7598 1068.37 126.38 1117.28 153.52C1142.84 167.7 1168.59 163.54 1208.89 158.54C1217.97 157.41 1227.73 156.2 1238.05 154.66C1282.24 147.98 1309.87 130.63 1330.3 111.31C1347.78 94.7798 1364.25 77.2298 1389.7 71.3898C1416.84 65.1598 1440.44 71.1698 1462.09 90.2998C1485.51 110.88 1499.76 140.27 1509.69 164.66C1529.64 213.66 1536.51 279.99 1622.51 250.93C1674.89 233.24 1702.25 194.51 1745.82 167.95C1784.79 144.19 1833.29 153.91 1916.94 161.98"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave11"
              d="M-2.44995 174.5C44.9193 188.53 79.3988 207.39 141.138 205.21C179.347 203.86 202.417 168.99 226.976 153.56C245.176 142.13 284.686 142.55 344.455 165.64C355.704 169.99 366.264 174.89 376.394 180.13C432.883 209.62 454.763 232.79 495.412 239.98C532.142 246.48 562.571 237.25 591.311 233.92C629.51 229.49 667.2 223.12 701.089 230.36C731.389 236.84 747.598 247.02 780.928 237.05C791.498 233.89 803.047 229.85 814.417 223.83C835.317 212.77 855.647 197.78 868.906 182.64C914.936 130.29 925.406 50.7697 971.895 42.0797C1024.72 32.1997 1054.69 119.91 1102.78 150.55C1128 166.62 1154.13 166.09 1194.55 162.04C1203.66 161.13 1213.44 160 1223.81 158.42C1268.64 151.54 1294.49 131.65 1314.09 110.67C1330.74 92.8397 1346.49 74.5797 1372.39 69.2097C1399.56 63.5797 1423.03 71.2797 1444.29 91.0397C1467.25 112.27 1481.74 141.95 1492.05 165.71C1512.64 213.22 1521.26 278.34 1609.98 244.83C1664.14 224.38 1694.74 189.18 1741.33 166.15C1782.24 145.93 1832.77 155.5 1916.96 164.79"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave12"
              d="M-2.39001 179.35C37.0794 191.04 74.5488 200.95 138.478 199.1C176.847 197.99 201.507 169.45 228.246 158.5C248.206 150.33 286.395 152.81 342.905 175.17C353.654 179.43 363.894 184.19 373.844 189.29C428.373 217.45 452.463 238.33 490.262 246.32C527.072 254.11 556.211 246.04 583.341 242.73C620.43 238.21 656.73 229.95 689.979 231.85C719.399 233.53 736.898 237.27 769.278 223.8C779.188 219.68 790.068 214.83 800.757 208.28C820.237 196.34 839.277 181.37 852.347 166.49C898.966 113.58 915.166 41.6901 959.395 35.3201C1012.08 27.7301 1041 113.43 1088.28 147.58C1113.15 165.54 1139.67 168.65 1180.22 165.55C1189.36 164.85 1199.16 163.81 1209.58 162.2C1255.04 155.12 1279.14 132.69 1297.89 110.06C1313.73 90.9401 1328.73 71.9501 1355.09 67.0701C1381.45 62.1901 1405.63 71.4301 1426.5 91.8201C1449.01 113.7 1463.74 143.67 1474.41 166.8C1495.65 212.82 1506.01 276.72 1597.44 238.78C1653.39 215.57 1687.21 183.82 1736.84 164.4C1779.67 147.64 1832.24 157.14 1916.99 167.65"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave13"
              d="M-2.33997 184.21C29.2395 193.56 69.6889 194.5 135.808 193C174.337 192.12 200.587 169.96 229.506 163.45C251.226 158.56 288.105 163.09 341.345 184.71C351.605 188.88 361.514 193.51 371.284 198.45C423.843 225.28 449.233 248.92 485.102 252.66C522.902 256.61 549.831 254.82 575.361 251.54C611.33 246.92 646.25 236.83 678.859 233.33C707.409 230.27 726.279 227.62 757.618 210.54C766.888 205.49 777.078 199.8 787.088 192.72C805.167 179.92 822.897 164.95 835.767 150.33C882.976 96.8498 904.916 32.6998 946.865 28.5598C999.414 23.3798 1027.27 106.96 1073.75 144.6C1098.26 164.45 1125.18 171.19 1165.85 169.04C1175.02 168.55 1184.84 167.6 1195.3 165.96C1241.39 158.68 1263.74 133.72 1281.64 109.42C1296.68 88.9998 1310.92 69.2798 1337.73 64.8998C1364.94 60.4498 1388.16 71.5498 1408.65 92.5698C1430.7 115.1 1445.67 145.36 1456.72 167.86C1478.59 212.39 1490.7 275.07 1584.86 232.69C1642.58 206.71 1679.63 178.34 1732.29 162.61C1777.06 149.24 1831.65 158.73 1916.95 170.47"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave14"
              d="M-2.28003 189.06C21.3996 196.07 64.8489 188.03 133.148 186.89C171.847 186.24 199.647 170.5 230.766 168.4C254.236 166.81 289.805 173.37 339.785 194.25C349.544 198.33 359.134 202.83 368.724 207.62C419.323 233.12 446.733 254.08 479.952 259.01C517.962 264.65 543.471 263.61 567.401 260.36C602.251 255.64 635.83 243.78 667.76 234.83C695.469 227.06 715.809 218.07 745.978 197.3C754.648 191.33 764.118 184.8 773.438 177.18C790.118 163.52 806.537 148.56 819.217 134.19C867.016 80.1501 894.676 23.8101 934.375 21.8201C986.785 19.1901 1013.58 100.51 1059.25 141.64C1083.4 163.38 1110.72 173.75 1151.52 172.55C1160.71 172.28 1170.56 171.4 1181.07 169.73C1227.8 162.25 1248.41 134.75 1265.44 108.79C1279.68 87.0801 1293.17 66.6101 1320.43 62.7401C1347.69 58.8701 1370.76 71.6801 1390.86 93.3301C1412.45 116.51 1427.65 147.06 1439.08 168.93C1461.58 211.98 1475.36 273.27 1572.33 226.62C1631.78 197.79 1672.14 172.8 1727.81 160.84C1774.55 150.8 1831.13 160.35 1916.98 173.31"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave15"
              d="M-2.21997 193.91C13.5698 198.59 59.999 181.55 130.488 180.77C169.347 180.34 198.687 171.03 232.036 173.33C257.236 175.06 291.485 183.72 338.245 203.78C347.505 207.79 356.784 212.14 366.184 216.78C414.813 240.95 444.193 259.33 474.813 265.35C512.962 272.86 537.112 272.38 559.441 269.17C593.171 264.33 625.46 250.75 656.66 236.32C683.569 223.87 705.469 208.54 734.348 184.05C742.458 177.17 751.168 169.8 759.798 161.63C775.098 147.12 790.188 132.15 802.667 118.04C851.047 63.4296 884.486 12.7996 921.886 15.0696C974.025 18.2396 999.784 94.1396 1044.76 138.67C1068.5 162.36 1096.27 176.3 1137.19 176.05C1146.41 175.99 1156.28 175.2 1166.83 173.5C1214.19 165.81 1233.07 135.79 1249.23 108.16C1262.68 85.1596 1275.4 63.9296 1303.12 60.5696C1330.38 57.2696 1353.35 71.7996 1373.07 94.0796C1394.2 117.91 1409.6 148.78 1421.45 169.98C1444.51 211.59 1460.12 271.65 1559.8 220.52C1621.03 188.95 1664.69 167.16 1723.32 159.04C1772.06 152.28 1830.6 161.94 1917 176.11"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave16"
              d="M-2.17004 198.77C5.71983 201.11 55.1391 174.96 127.818 174.67C166.837 174.4 197.697 171.6 233.296 178.28C260.206 183.33 293.195 193.98 336.685 213.32C345.455 217.24 354.404 221.45 363.624 225.95C410.284 248.79 441.563 264.65 469.653 271.7C507.862 281.29 530.732 281.12 551.461 278C584.061 272.98 615.12 257.73 645.53 237.82C671.689 220.69 695.229 199.03 722.679 170.81C730.258 163.01 738.198 154.81 746.118 146.09C760.058 130.74 773.798 115.76 786.088 101.9C835.057 46.7198 874.076 6.30983 909.356 8.32983C961.365 11.3098 986.074 87.6498 1030.23 135.71C1053.62 161.27 1081.78 178.86 1122.82 179.57C1132.07 179.73 1141.96 179.02 1152.56 177.29C1200.56 169.4 1217.77 136.87 1232.99 107.55C1245.71 83.2798 1257.61 61.2598 1285.77 58.4298C1313.06 55.6898 1335.9 71.9498 1355.23 94.8598C1375.9 119.34 1391.55 150.5 1403.76 171.07C1427.47 211.19 1444.83 270.07 1547.21 214.46C1610.23 180.15 1657.23 161.52 1718.77 157.28C1769.56 153.78 1830.01 163.56 1916.96 178.96"
              stroke="#838383"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              id="lineWave17"
              d="M-2.10999 203.62C-2.10999 203.62 50.2892 168.56 125.168 168.56C200.047 168.56 249.956 181.63 361.074 235.11C472.193 288.59 511.492 292 543.501 286.81C609.46 276.11 668.289 213.13 732.468 130.53C796.627 47.9299 855.577 -3.29013 896.846 1.56987C982.215 11.6199 991.624 205.44 1138.31 181.04C1227.17 166.26 1205.22 61.3199 1268.45 56.2499C1324.92 51.7199 1361.74 133.5 1386.11 172.13C1410.47 210.76 1429.57 268.46 1534.67 208.38C1652.67 140.91 1722.87 144.91 1916.98 181.79"
              stroke="#D86A8D"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        {Object.keys(waveContent).map((res, index) => {
          return (
            <div
              key={`waveChild${index + 1}`}
              id={`waveChild${index + 1}`}
              className={`${styles[`waveChild${index + 1}`]} ${styles.waveChild}
              ${wave === index + 1 ? styles.waveChildActive : ""}
              ${
                waveContent[res].type === "scale" ? styles.waveChildScale : ""
              }`}
              ref={(e) => (waveLineRef[index + 1] = e)}
            >
              {/* {index + 1} */}
              <>
                <div
                  className={`${styles.waveInner} ${
                    waveContent[res].type === "scale"
                      ? styles.waveInnerScale
                      : ""
                  }`}
                >
                  <div
                    className={`${styles.parent} ${
                      waveContent[res].type === "scale"
                        ? styles.parentScale
                        : ""
                    }`}
                  >
                    {waveContent[res].type === "percent" && (
                      <div className={styles.percent}>
                        {waveContent[res].count}%
                      </div>
                    )}
                    <div className={styles.ofPatientsWith}>
                      <b>{waveContent[res].bold}</b>
                      {waveContent[res].description}
                    </div>
                    {waveContent[res].type === "scale" && (
                      <VerticalProgressBar
                        percentage={waveContent[res].count}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.waveItem}  ${
                    waveContent[res].type === "scale"
                      ? styles.waveItemScale
                      : ""
                  }`}
                />
              </>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default SectionWave;
