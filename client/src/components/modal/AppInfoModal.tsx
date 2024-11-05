import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  closeModal,
  selectModal,
  toggleDoNotShowAgain,
} from "../../features/modalSlice";

const AppInfoModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen, doNotShowAgain } = useAppSelector(selectModal);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-3/4 max-w-lg p-6 shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">
          About Critical Events Finder
        </h2>
        <p className="mb-4">
          This app helps users identify "critical" events from traffic data
          entries, where an event is considered critical if it appears in two or
          more intersections on multiple days.
        </p>
        <h3 className="text-xl font-semibold mb-2">How to Use the App</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Upload an Excel file containing traffic data (use the example file
            provided) OR enter the data manually.
          </li>
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
        </ul>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="doNotShowAgain"
            checked={doNotShowAgain}
            onChange={() => dispatch(toggleDoNotShowAgain())}
            className="h-5 w-5 border-2 border-gray-300 rounded-md cursor-pointer checked:bg-blue-600 checked:border-transparent transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          />
          <label
            htmlFor="doNotShowAgain"
            className="ml-2 text-gray-700 cursor-pointer select-none"
          >
            Do not show this again
          </label>
        </div>
        <button
          onClick={() => dispatch(closeModal())}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AppInfoModal;