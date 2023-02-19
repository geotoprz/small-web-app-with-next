import React from "react";
import ContactCards from "../components/pageTwo/ContactCards";
import axios from "axios";
import BaseHeading from "@/components/UI/BaseHeading";
import BasePageContainer from "@/components/UI/BasePageContainer";

const pageTwo = ({ pageProps }) => {
  return (
    <>
      {pageProps?.tiles ? (
        <BasePageContainer>
          <div className="flex flex-col gap-5 lg:gap-10 xl:gap-14 2xl:gap-16">
            <BaseHeading>
              {pageProps?.description ?? "We match your unique business needs"}
            </BaseHeading>
            <ContactCards cardProps={pageProps.tiles} />
          </div>
        </BasePageContainer>
      ) : (
        <BaseHeading>No data found.</BaseHeading>
      )}
    </>
  );
};

export default pageTwo;

export async function getStaticProps() {
  let pageData;
  try {
    const resPage = await axios.get(process.env.NEXT_PUBLIC_PAGE_API);
    pageData = resPage.data?.data;
  } catch (err) {
    console.log(err);
  }
  const pageProps = pageData ?? null;

  return {
    props: { pageProps },
  };
}
