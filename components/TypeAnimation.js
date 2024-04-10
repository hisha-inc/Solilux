// Type animation
import { TypeAnimation } from 'react-type-animation';

const typeAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'DEVELOPERS',
          1000,
          'DESIGNERS',
          1000,
          'ILLUSTRATORS',
          1000
        ]}
        wrapper="span"
        speed={5}
        style={{ fontSize: '1.5em', display: 'inline-block' }}
        repeat={Infinity}
      />
    );
  };

export default typeAnimation;