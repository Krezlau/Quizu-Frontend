const LoadingSpinner: React.FC<{size?: string}> = (props) => {
  const size = props.size === "xl" ? 12 : 8;
  const classname = `inline-block h-${size} w-${size} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`; 
  return <div
  className={classname}
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
}

export default LoadingSpinner;

