const description =
  "Minim bresaola rump pastrami pork belly buffalo meatball. Swine landjaeger shoulder pork loin aute laboris ut prosciutto. Eiusmod tempor hamburger tenderloin in shank. Ut laboris alcatra deserunt minim pig tongue.";

const blogList = [
  {
    id: 1,
    title: "Article 1",
    description: description,
  },
  {
    id: 2,
    title: "Article 2",
    description: description,
  },
  {
    id: 3,
    title: "Article 3",
    description: description,
  },
  {
    id: 4,
    title: "Article 4",
    description: description,
  },
  {
    id: 5,
    title: "Article 5",
    description: description,
  },
  {
    id: 6,
    title: "Article 6",
    description: description,
  },
];

export default blogList;

export function getBlogArticleById(searchedId) {
  return blogList.find((article) => article.id === searchedId);
}
