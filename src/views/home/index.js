import Typography from "@/components/theme/typography";
import Button from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div>
        Typo
        <div>
          <Typography variant={`h1`}>Heading 1</Typography>
          <Typography variant={`h2`}>Heading 2</Typography>
          <Typography variant={`h3`}>Heading 3</Typography>
          <Typography variant={`h4`}>Heading 4</Typography>
          <Typography variant={`h5`}>Heading 5</Typography>
          <Typography variant={`h6`}>Heading 6</Typography>
          <Typography variant={`p`}>Peragraph 1</Typography>
          <Typography variant={`p1`}>Peragraph 2</Typography>
        </div>
      </div>

      <div>
        buttons
        <div className="flex flex-col gap-10 h-full justify-center items-center">
          <Button size={`small`} variant={`outline`}>
            helo world
          </Button>
          <Button size={`medium`} variant={`primary`}>
            helo world
          </Button>
          <Button size={`large`} variant={`secondary`}>
            helo world
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
