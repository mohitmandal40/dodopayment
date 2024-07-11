const Page1 = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};

export default Page1;
