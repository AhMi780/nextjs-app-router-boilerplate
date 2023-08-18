import { Typography } from "@/components/theme/typography";

const Home = () => {
  return (
    <div>
      Typo
      <div>
        <Typography tag={`h1`}>Heading 1</Typography>
        <Typography tag={`h2`}>Heading 2</Typography>
        <Typography tag={`h3`}>Heading 3</Typography>
        <Typography tag={`h4`}>Heading 4</Typography>
        <Typography tag={`h5`}>Heading 5</Typography>
        <Typography tag={`h6`}>Heading 6</Typography>
        <Typography tag={`p`}>Peragraph 1</Typography>
        <Typography tag={`p1`}>Peragraph 2</Typography>
      </div>
    </div>
  );
};

export default Home;
