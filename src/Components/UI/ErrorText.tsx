const ErrorText: React.FC<{ text: string; verticalCenter?: boolean }> = (
  props
) => {
  return (
    <p
      className={`text-red-500 max-w-4xl mx-auto ${
        props.verticalCenter ? "my-auto" : "mt-1 text-center"
      }`}
    >
      {props.text}
    </p>
  );
};

export default ErrorText;
