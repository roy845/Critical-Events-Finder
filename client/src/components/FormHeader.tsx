interface FormHeaderProps {
  title: string;
}

const FormHeader = ({ title }: FormHeaderProps) => {
  return (
    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
      {title}
    </h1>
  );
};

export default FormHeader;
