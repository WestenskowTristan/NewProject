import React from "react";
import styles from "./about-me.module.scss";
import AnimatedText from "../../components/AnimatedText";
import Text from "../../components/common/Text";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import image from "../../../public/images/18138F33-0C46-494E-B3D5-CA0493CC4750_1_102_o.jpeg";
import TechIcon from "../../components/TechIcon";
import reactIcon from "../../../public/images/React.png";
import htmlIcon from "../../../public/images/HTML5.png";
import cssIcon from "../../../public/images/CSS3.png";
import javaScriptIcon from "../../../public/images/JavaScript.png";
import jQueryIcon from "../../../public/images/jQuery.png";
import angularIcon from "../../../public/images/AngularJS.png";
import tailWind from "../../../public/images/Tailwind CSS.png";
import node from "../../../public/images/Node.js.png";
import goLang from "../../../public/images/Go.png";
import postgres from "../../../public/images/PostgresSQL.png";
import git from "../../../public/images/Git.png";
import gitHub from "../../../public/images/GitHub.png";
import vsCode from "../../../public/images/Visual Studio Code (VS Code).png";
import NPM from "../../../public/images/NPM.png";
import heroku from "../../../public/images/Heroku.png";
import Icon from "../../components/common/Icon";
import {
  faGamepad,
  faPlaneDeparture,
  faDumbbell,
  faTerminal,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <div>
            <AnimatedText
              text="A Little Bit About Me"
              delayPerChar={0.05}
              size="extraLarge"
              color="gold"
              className={styles.animatedText}
            />
          </div>
          <div className={styles.subHeaderContainer}>
            <Text color="white" className={styles.subHeaderText}>
              My journey as a software developer began in 2021 when I enrolled
              in my university’s Web Development Bootcamp. I was immediately
              captivated by the process of building and problem-solving through
              code and knew I had found my passion. After completing the program
              and earning my certificate, I was fortunate to secure an
              internship that quickly evolved into a full-time position. Later,
              I was presented with the opportunity to join a startup, where I’ve
              been helping to build an innovative product ever since.
            </Text>
            <div className={styles.imageContainer}>
              <img src={image} />
            </div>
          </div>
        </div>
        <div className={styles.technologiesContainer}>
          <div className={styles.technologiesHeader}>
            <Text className={styles.techHeaderText} color="white" weight="bold">
              Technologies I Have Experiance With
            </Text>
          </div>
          <div className={styles.techContainer}>
            <div className={styles.technologiesDiv}>
              <div className={styles.techHeader}>
                <Text color="white">FRONTEND</Text>
              </div>
              <div className={styles.techIconsContainer}>
                <TechIcon
                  image={reactIcon}
                  alt="react icon"
                  description="React/React Native/Typescript"
                />
                <TechIcon image={htmlIcon} alt="html icon" description="HTML" />
                <TechIcon image={cssIcon} alt="css icon" description="CSS" />
                <TechIcon
                  image={tailWind}
                  alt="tailwind icon"
                  description="Tailwind"
                />
                <TechIcon
                  image={jQueryIcon}
                  alt="jQuery icon"
                  description="jQuery"
                />
                <TechIcon
                  image={angularIcon}
                  alt="angularJS icon"
                  description="AngularJs"
                />
              </div>
            </div>
            <div className={styles.technologiesDiv}>
              <div className={styles.techHeader}>
                <Text color="white">TOOLS</Text>
              </div>
              <div className={styles.techIconsContainer}>
                <TechIcon image={git} alt="Git icon" description="Git" />
                <TechIcon
                  image={gitHub}
                  alt="github icon"
                  description="Github"
                />
                <TechIcon image={NPM} alt="NPM icon" description="NPM" />
                <TechIcon
                  image={vsCode}
                  alt="VS code icon"
                  description="VS Code"
                />
                <TechIcon
                  image={heroku}
                  alt="heroku icon"
                  description="Heroku"
                />
              </div>
            </div>
            <div className={styles.technologiesDiv}>
              <div className={styles.techHeader}>
                <Text color="white">BACKEND</Text>
              </div>
              <div className={styles.techIconsContainer}>
                <TechIcon image={node} alt="Node Icon" description="Node.js" />
                <TechIcon
                  image={postgres}
                  alt="Postgress Icon"
                  description="Postgres"
                />
              </div>
            </div>
            <div className={styles.technologiesDiv}>
              <div className={styles.techHeader}>
                <Text color="white">LANGUAGES</Text>
              </div>
              <div className={styles.techIconsContainer}>
                <TechIcon image={goLang} alt="Go Icon" description="GoLang" />
                <TechIcon
                  image={javaScriptIcon}
                  alt="javascript icon"
                  description="JavaScript"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hobbiesConatiner}>
          <div>
            <Text color="white" weight="bold" className={styles.hobbiesTitle}>
              My Hobbies & Intrests
            </Text>
          </div>
          <div className={styles.hobbiesAndIntrests}>
            <div className={styles.hobbiesIcons}>
              <Icon
                color="white"
                icon={faGamepad}
                className={styles.hobbieIcon}
              />
              <Icon
                color="white"
                icon={faDumbbell}
                className={styles.hobbieIcon}
              />
              <Icon
                color="white"
                icon={faTerminal}
                className={styles.hobbieIcon}
              />
              <Icon
                color="white"
                icon={faPlaneDeparture}
                className={styles.hobbieIcon}
              />
              <Icon color="white" icon={faTree} className={styles.hobbieIcon} />
            </div>
            <Text color="white" className={styles.hobbieParagraph}>
              Coding is one of my passions, and I enjoy tackling challenges that
              allow me to continuously learn and grow. Outside of development,
              I’m an avid gamer, with the Resident Evil series being a longtime
              favorite. I also love to travel, and one of my goals this year is
              to travel internationally for the first time with my wife on our
              honeymoon, as neither of us has been outside of the United States.
              I also am a big Lord of The Rings fan, I will watch the extended
              additions at least once a month. You can also find me in the gym
              lifting weights.
            </Text>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.learnMoreButton}
            name="learn more"
            border="red"
            size="large"
            onClick={() => navigate("/work")}
          >
            <Text className={styles.buttonText} color="white">
              Check out my work! 
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
