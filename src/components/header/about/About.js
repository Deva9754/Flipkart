import { useEffect, useState } from "react";
import { GitAPI } from "../../../utils/Constants";

const About = () => {
  const [gitAbout, setGitAbout] = useState({});

  const gitdata = async () => {
    const gitFetch = await fetch(GitAPI);
    const gitData = await gitFetch.json();
    console.log(gitData);
    setGitAbout(gitData);
  };
  useEffect(() => {
    gitdata();
  }, []);

  return (
    <div>
      {gitAbout?.length > 0 &&
        gitAbout?.map((item) => <div key={item?.id}>{item?.company}</div>)}
    </div>
  );
};
export default About;
