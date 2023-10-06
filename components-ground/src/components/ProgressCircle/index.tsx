import { ProgressCircleProps } from './types';

const ProgressCircle = ({ min = 0, max, current }: ProgressCircleProps) => {
  const dashArray = 40 * Math.PI * 2;
  const percentage = (current * 100) / (max - min);
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg
      id="progress-circle"
      role="progressbar"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      version="1.1"
      width={200}
      height={200}
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="lightgray"
        strokeWidth={10}
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="blue"
        strokeWidth={10}
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        style={{
          transformOrigin: 'center',
          transform: 'rotate(180deg)',
        }}
      />
    </svg>
  );
};

export default ProgressCircle;
