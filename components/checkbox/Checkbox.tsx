import React, { FC } from 'react';

const Checkbox: FC<any> = ({ cuisine, changeChecked }) => {
  const { checked, label, id } = cuisine;
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => changeChecked(id)}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
