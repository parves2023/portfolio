import { userData } from "@/data/user-data";
import Contributions from "./components/contributions";
import HeroSection from "./components/hero-section";
import Projects from "./components/projects";
import PitchforkKickstarterTaxidermy from "./components/newRAnk/PitchforkKickstarterTaxidermy";
import RawDenimHeirloomManBraid from "./components/RawDenimHeirloomManBraid/RawDenimHeirloomManBraid";


async function getGitProfile() {
  const res = await fetch(`https://api.github.com/users/${userData.githubUser}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

async function getGitProjects() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=10&type=Repositories`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

export default async function Home() {
  const profile = await getGitProfile();
  const projects = await getGitProjects();

  return (
    <>
      <HeroSection profile={profile} />
      <PitchforkKickstarterTaxidermy></PitchforkKickstarterTaxidermy>
      <Projects
        projects={projects.items}
        profile={profile}
      />
      <RawDenimHeirloomManBraid></RawDenimHeirloomManBraid>
      
      
      <Contributions />
    </>
  )
};

export async function generateMetadata({ params, searchParams }, parent) {
  const profile = await getGitProfile();

  return {
    title: `Anamul Hauqe`,
    description: profile.description,
    image: 'https://drive.google.com/file/d/1E4F3po8iJFQqsVB7b0yC_OdnJruGF-5t/view'
  };
  
};