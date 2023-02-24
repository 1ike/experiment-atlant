import * as React from 'react';
import Svg, { Path } from 'react-native-svg';


type Props = {
  backgroundColor: string,
  borderTopColor: string,
  borderTopWidth: number,
};

export default function UnderTabBarButtonSVG({
  backgroundColor, borderTopColor, borderTopWidth,
}: Props) {
  const correction = borderTopWidth === 1 ? 1 : borderTopWidth / 2;
  const topLine = `
    M 0  ${correction}
    A 15 15 0 0 1 ${17} ${10 + correction}
    A 35 35 0 0 0 ${83} ${10 + correction}
    A 15 15 0 0 1 100 ${correction}
  `;

  return (
    <Svg width="100" height="42">
      <Path
        d={`
          ${topLine}
          L 100 42
          L 0 42
          Z
        `}
        fill={backgroundColor}
      />
      <Path
        d={topLine}
        stroke={borderTopColor}
        strokeWidth={borderTopWidth}
        fill="transparent"
      />
    </Svg>
  );
}
