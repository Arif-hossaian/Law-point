import React, { FC, ReactChild, ReactFragment, ReactPortal } from 'react';
import { Card } from '../Card/Card';

const DisplayAllLaws: FC<any> = ({ laws }) => {
  return (
    <div>
      {/* Product grid */}
      {laws.length !== 0 ? (
        <div className="lg:col-span-3 space-y-3 px-5 ">
          {laws.map(
            (
              lawInfo: {
                title:
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
                    <h1 className="text-xl font-extrabold">{lawInfo.title}</h1>
                    <p>{lawInfo.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-light">
                      Act Number:-{' '}
                      <span className="text-sm text-indigo-600 font-mono">
                        {lawInfo.actNum}
                      </span>
                    </p>
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
          Loading Please Wait...
        </div>
      )}
    </div>
  );
};

export default DisplayAllLaws;
