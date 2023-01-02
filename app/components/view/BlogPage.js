import React from "react";
import AnimationRevealPage from "~/helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "~/components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "~/components/headers/light.js";
import Footer from "~/components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "~/components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`box-border block text-lg`}
  h2 {
    ${tw`text-black text-3xl mt-[2.1em] mb-[1.3em] font-bold relative box-border`}
    strong {
      ${tw`font-bold box-border text-3xl`}
    }
    a {
      ${tw`visited:text-[#267438] hover:underline bg-transparent box-border text-3xl font-bold mo-underline`}
      svg {
        ${tw`hover:opacity-100 opacity-0 w-[40px] h-[18px] relative box-border text-3xl font-bold link:text-[#267438]`}
      }
    }
  }
  p {
    ${tw`text-black m-0 mb-[10px] box-border block text-lg`}
  }
  h3 {
    ${tw`text-[#000] mt-[2.1em] mb-[1.3em] font-bold text-[24px] relative box-border block`}
    strong {
      ${tw`font-bold box-border text-black text-3xl`}
      a {
        ${tw`visited:text-[#267438] hover:underline bg-transparent box-border text-[24px] font-bold no-underline`}
        svg {
          ${tw`hover:opacity-100 opacity-0 w-[40px] h-[18px] relative box-border text-3xl font-bold link:text-[#267438]`}
        }
      }
    }
  }
  pre {
    ${tw`whitespace-pre-wrap relative font-mono text-[1em] box-border`}
    code {
      ${tw`rounded border-[#267438] bg-[#fafafa] text-[#000] block p-[1em] text-[14px] font-mono font-[Source_Code_Pro] bg-[#fff] box-border whitespace-pre-wrap`}
    }
  }
`;

export default BlogPost = ({ postData }) => {
  return (
    <>
      <div className='bg-white pb-[80px] w-[100%] relative max-w-[1520px] mx-auto box-border block'>
        <div className='px-[6vw] box-border block'>
          <div className='flex flex-wrap box-border'>
            <main role='main' className='grow shrink-0 basis-auto max-w-[100%] box-border block'>
              <div className='my-[8px] box-border '></div>
              <article className='mb-[30px] box-border block'>
                <header className='box-border block'>
                  <h1 className='text-[#333] mt-[60px] text-5xl tracking-tight mb-[10px] box-border block font-light'></h1>
                  <p className='text-[#333] mt-[3em] font-light text-sm mb-[10px] box-border block'>Last Modified:
                    <span className='box-border text-[#333] text-sm font-light'></span>
                  </p>
                </header>
              <Text>
                <PrismicRichText></PrismicRichText>
              </Text>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}