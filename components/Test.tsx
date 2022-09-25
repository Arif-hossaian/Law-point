import { FC, ReactChild, ReactFragment, ReactPortal } from 'react';
import { Card } from './Card/Card';
import Checkbox from './checkbox/Checkbox';

const DisplayingData: FC<any> = ({ list, cusineOptions, changeChecked }) => {
  return (
    <div className="bg-white dark:bg-gray-600 mx-auto max-w-screen-lg p-6">
      <div>
        <section aria-labelledby="products-heading" className="pt-6 pb-24 ">
          <div
            className="grid grid-cols-1
          divide-x-4 gap-x-8 gap-y-10 lg:grid-cols-4 "
          >
            {/* Filters */}

            <Card className="h-32">
              {cusineOptions?.map((cusineOption: any) => (
                <Checkbox
                  key={cusineOption.id}
                  changeChecked={changeChecked}
                  cuisine={cusineOption}
                />
              ))}
            </Card>

            {/* Law grid */}
            {list.length !== 0 ? (
              <div className="lg:col-span-3 space-y-3 px-5 ">
                {list.map(
                  (
                    lawInfo: {
                      title:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      category:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      description:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      actNum:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      year:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                    },
                    id: any
                  ) => (
                    <Card key={id}>
                      <div className="grid grid-cols-1 space-y-6  items-center px-4">
                        <div>
                          <h1 className="text-xl font-extrabold">
                            {lawInfo.title}
                          </h1>
                          <p>{lawInfo.description}</p>
                        </div>
                        <div>
                          <p className="text-sm font-light">
                            Act Number:-{' '}
                            <span className="text-sm text-indigo-600 font-mono">
                              {lawInfo.actNum}
                            </span>
                          </p>
                          <p>{lawInfo.category}</p>
                          <p className="text-sm font-light">
                            Year:-{' '}
                            <span className="text-sm text-indigo-600">
                              {lawInfo.year}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Card>
                  )
                )}
              </div>
            ) : (
              <div className="flex justify-center items-center text-xl">
                Not Found
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
export default DisplayingData;
