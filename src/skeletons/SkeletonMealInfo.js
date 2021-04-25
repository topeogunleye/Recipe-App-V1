import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonMealInfo = ({ theme }) => {
  const themeClass = theme || 'light';

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article flex flex-col items-center justify-center text-center">
        <SkeletonElement type="title" />
        <SkeletonElement type="imageBig" />
        <SkeletonElement type="mealInfo" />
        <SkeletonElement type="mealInfo" />
        <SkeletonElement type="textBig" />
        <ul className="pl-0">
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mb-0 mr-1 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mb-0 mr-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
          <li className="rounded inline-block text-gray-900 text-xs font-bold p-0 mt-0 mr-1 mb-0 ml-0">
            <SkeletonElement type="liText" />
          </li>
        </ul>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonMealInfo;
