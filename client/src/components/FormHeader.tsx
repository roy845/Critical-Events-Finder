import { useDarkMode } from "../hooks/useDarKMode";

interface FormHeaderProps {
  title: string;
}

const FormHeader = ({ title }: FormHeaderProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <h1
      className={`text-2xl font-semibold text-center mb-6 ${
        isDarkMode ? "text-gray-300" : "text-gray-800"
      }`}
    >
      {title}
    </h1>
  );
};

export default FormHeader;
