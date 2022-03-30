import React from 'react';
// import EmailIcon from '@/Icons/EmailIcon';
// import InstagramIcon from '@/Icons/InstagramIcon';
// import LinkedinIcon from '@/Icons/LinkedinIcon';
// import YoutubeIcon from '@/Icons/YoutubeIcon';
// import TwitterIcon from '@/Icons/TwitterIcon';

// const socialLinks = [
//   {
//     lable: 'twitter profile',
//     Icon: <TwitterIcon />,
//     href: 'https://twitter.com/Miad_Vosoughi',
//   },
//   {
//     lable: 'email address',
//     Icon: <EmailIcon />,
//     href: 'mailto:miadv.biz@gmail.com',
//   },
//   {
//     lable: 'linkedin profile',
//     Icon: <LinkedinIcon />,
//     href: 'https://www.linkedin.com/in/miad-vosoughi/',
//   },
//   {
//     lable: 'instagram',
//     Icon: <InstagramIcon />,
//     href: 'https://www.instagram.com/miadv.dev/',
//   },
//   {
//     lable: 'youtube',
//     Icon: <YoutubeIcon />,
//     href: 'https://www.youtube.com/c/MiadVosoughi/',
//   },
// ];

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="border-t  border-slate-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center space-y-4 py-4 px-4 sm:flex-row sm:space-y-0 md:px-8">
        <div>
          <p className="text-center text-sm">
            Copyright &copy; {new Date().getFullYear()} | Developed by Limon &
            Arif
          </p>
        </div>
      </div>
    </footer>
  );
};
