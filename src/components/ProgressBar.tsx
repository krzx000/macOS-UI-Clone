export const ProgressBar: React.FC<{ progress: number; large?: boolean; fullWidth?: boolean }> = ({
  progress,
  large,
  fullWidth,
}) => {
  return (
    <div
      className={`PROGRESS-BAR bg-black/5 rounded-full ${large ? "h-2" : "h-1"} ${
        fullWidth ? "w-full" : "w-32"
      }`}
    >
      <div
        className={`${large ? "h-2" : "h-1"} bg-blue-500 rounded-full`}
        style={{ width: progress + "%" }}
      />
    </div>
  );
};
