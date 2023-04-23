const ErrorText: React.FC<{text: string}> = (props) => {
  return <p className="text-red-500 text-center mt-1 max-w-4xl mx-auto">{props.text}</p>
}

export default ErrorText;
