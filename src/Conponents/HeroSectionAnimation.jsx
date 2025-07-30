import { TypeAnimation } from "react-type-animation";

const HeroSectionAnimation = () => {
    return (
        <TypeAnimation
        sequence={[
            'Aashis Dangol', 2000,
            '', 1000,
            'Front-end Developer', 2000,
            '', 1000,
            'Back-end Developer', 2000,
            '', 1000,
            'Software Engineer', 2000,
            '', 1000
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#fff'
        }}
        />
    );
    
}
export default HeroSectionAnimation;