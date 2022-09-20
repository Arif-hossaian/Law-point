import React, { FC, FunctionComponent, useEffect } from 'react';
import { animated } from '@react-spring/web';
import useDimensions from 'react-cool-dimensions';
import { ResizeObserver } from '@juggle/resize-observer';
import { useSpring } from 'react-spring';
import { Card } from '../Card/Card';
import Image from 'next/image';
import LocationIcon from '../../icons/LocationIcon';
import AcademicIcon from '../../icons/AcademicIcon';
import { Button } from '../Button';
import WebsiteIcon from '../../icons/WebsiteIcon';
import PhoneIcon from '../../icons/PhoneIcon';

interface ChildProps {
  pt?: boolean;
}

export interface ExpandableProps extends ChildProps {
  open?: boolean;
}

export const Expandable: FunctionComponent<ExpandableProps> = ({
  open,
  children,
  pt,
}) => {
  const { observe, height } = useDimensions<HTMLDivElement>({
    useBorderBoxSize: true,
    polyfill: ResizeObserver,
  });
  const [spring, api] = useSpring(() => ({
    from: { opacity: 0, height, overflow: 'hidden' },
    to: {
      height: 0,
      opacity: 0,
      overflow: 'hidden',
    },
  }));
  useEffect(() => {
    api.start(
      open
        ? { opacity: 1, height, overflow: 'unset' }
        : { opacity: 0, height: 0, overflow: 'hidden' }
    );
  }, [open, height, api]);

  return (
    <animated.div
      style={{
        opacity: spring.opacity as any,
        height: spring.height,
        overflow: spring.overflow as any,
      }}
    >
      <div ref={observe}>{children}</div>
    </animated.div>
  );
};

interface LayerInfoPropsProps {
  _id: number;
  name: string;
  content?: string;
  image: string;
  designation: string;
  address: string;
  personalWebsite?: string;
  phone: string;
  toggle: (key: string) => void;
  open: boolean;
}

const LayerInfo: FC<LayerInfoPropsProps> = ({
  _id,
  name,
  content,
  image,
  designation,
  address,
  personalWebsite,
  phone,
  toggle,
  open,
}) => {
  return (
    <div className="border border-indigo-500 p-5 bg-gray-200 dark:bg-gray-600 rounded-md">
      <div key={_id}>
        <div
          onClick={() => toggle(name)}
          className="flex justify-between items-center"
        >
          <div className="flex justify-between items-center space-x-3">
            <Image
              src={image}
              alt="picture"
              layout="fixed"
              height={50}
              width={50}
              className="border rounded-full"
            />
            <p className="font-light text-lg">{name}</p>
          </div>

          <span className="cursor-pointer">{!open ? '+' : '-'}</span>
        </div>

        <Expandable open={open}>
          <div>
            <React.Fragment key={name}>
              <Card className="mt-5">
                <div className="mx-auto max-w-screen-md grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
                  <Image
                    src={image}
                    alt="lawyer_picture"
                    layout="fixed"
                    height={300}
                    width={300}
                    className="border rounded-md"
                  />
                  <div>
                    <h1 className="text-[30px] font-extrabold">{name}</h1>
                    <div className="flex justify-start items-center">
                      <AcademicIcon />
                      <p className="text-light text-indigo-400 ml-1">
                        {designation}
                      </p>
                    </div>
                    <div className="flex justify-start items-center mt-2">
                      <LocationIcon />
                      <p className="text-light text-indigo-400 ml-1">
                        {address}
                      </p>
                    </div>
                    {personalWebsite ? (
                      <div className="flex justify-start items-center mt-2">
                        <WebsiteIcon />
                        <a
                          href={personalWebsite}
                          target="_blank"
                          rel="noreferrer"
                          className="text-light text-indigo-400 ml-1 cursor-pointer"
                        >
                          {personalWebsite}
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                    <div className="flex justify-start items-center mt-2">
                      <PhoneIcon />
                      <p className="text-light text-indigo-400 ml-1">
                        {phone.substring(4)}
                      </p>
                    </div>
                    <p className="mt-5 font-mono">{content}</p>
                    <Button className="mt-5">
                      <a href={phone}>Call Now</a>
                    </Button>
                  </div>
                </div>
              </Card>
            </React.Fragment>
          </div>
        </Expandable>
      </div>
    </div>
  );
};

export default LayerInfo;
