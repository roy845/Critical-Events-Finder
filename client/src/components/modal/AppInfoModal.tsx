import { closeModal, toggleDoNotShowAgain } from "../../features/modalSlice";
import { IoIosClose, IoIosInformationCircle } from "react-icons/io";
import CloseButton from "../CloseButton";
import useAppInfoModal from "../../hooks/useAppInfoModal";

const AppInfoModal = () => {
  const { isOpen, doNotShowAgain, isDarkMode, dispatch } = useAppInfoModal();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div
        className={`relative rounded-lg w-3/4 max-w-lg p-6 shadow-lg ${
          isDarkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"
        }`}
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <CloseButton />

        <h2 className="text-center text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          About Critical Events Finder
          <IoIosInformationCircle size={28} />
        </h2>
        <p className="mb-4">
          This app helps users identify "critical" events from traffic data
          entries, where an event is considered critical if it appears in two or
          more intersections on multiple days.
        </p>
        <h3 className="text-xl font-semibold mb-2">How to Use the App</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Upload an Excel\JSON file containing traffic data (use the example
            file provided) <strong>OR</strong> enter the data manually{" "}
            <strong>OR</strong> generate random list of days with events.
          </li>
          <li>View analytics about intersections / events </li>
          <li>
            View identified critical events directly on the app's dashboard.
          </li>
          <li>
            Use search and sort functionalities to filter and organize critical
            events.
          </li>
          <li>
            Utilize pagination controls to navigate through extensive event
            lists efficiently.
          </li>
          <li>Export critical events to an Excel file.</li>
          <li>View how much critical events are found in table / graph form</li>
        </ul>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="doNotShowAgain"
            checked={doNotShowAgain}
            onChange={() => dispatch(toggleDoNotShowAgain())}
            className={`h-5 w-5 border-2 rounded-md cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 border-gray-600 focus:ring-blue-400"
                : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
            }`}
          />
          <label
            htmlFor="doNotShowAgain"
            className={`ml-2 cursor-pointer select-none ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Do not show this again
          </label>
        </div>
        <button
          onClick={() => dispatch(closeModal())}
          className={`mt-6 px-4 py-2 rounded transition ${
            isDarkMode
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          <span className="flex justify-center gap-4">
            Close
            <span className="mt-1.5">
              <IoIosClose />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default AppInfoModal;
