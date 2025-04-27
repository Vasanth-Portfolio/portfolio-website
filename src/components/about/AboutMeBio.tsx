import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext, { Bio } from '../../context/AboutMeContext';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img 
          src={profileImage} 
          className="rounded-lg w-96" 
          alt="Profile" 
        />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left space-y-6">
        {aboutMe.map((bio: Bio) => (
          <div key={bio.id} className="text-lg">
            {typeof bio.bio === 'string' ? (
              <p className="mb-4 text-ternary-dark dark:text-ternary-light">
                {bio.bio}
              </p>
            ) : (
              bio.bio
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;