import { NextPage } from "next";
import NextImage from "next/image";
import React from "react";
import tw, { styled } from "twin.macro";
import { DiscordIcon, RssIcon, TwitterIcon } from "../components/Icons";
import { Link } from "../components/Link";
import { ArrowRight, Book, Code, Database, GitHub, Zap } from "react-feather";

const Home: NextPage = () => {
  return (
    <>
      <div tw="max-w-4xl">
        <h1 tw="text-5xl md:text-6xl font-bold mb-12">Introduction</h1>
        {/* Need to make this mobile friendly */}
        <div
          css={[
            `background: linear-gradient(83.84deg, rgba(149, 203, 233, 0.9) -3.34%, rgba(71, 201, 242, 0.135) 35.77%), linear-gradient(101.71deg, rgba(227, 167, 228, 0.048) 46.42%, rgba(238, 96, 215, 0.8) 94.51%), linear-gradient(149.12deg, #3308AD 13.67%, rgba(51, 8, 173, 0) 86.42%);`,
            tw`flex relative rounded-md w-full overflow-hidden`,
          ]}
        >
          <div tw="py-12 pl-12 z-10">
            <div tw="text-3xl font-bold text-white mb-4">Quickstart Guide</div>
            <div tw="text-xl font-normal text-white mb-12 max-w-md">
              A short guide on making your first move with <strong>Resolv</strong> in a couple
              of minutes.
            </div>
            <ButtonLink
              href="/getting-started"
              tw="w-40 bg-pink-700 text-white text-center text-lg hover:bg-pink-500"
            >
              <div tw="flex flex-row justify-center items-center font-semibold">
                <ArrowRight tw="mr-1" />
                Get Started
              </div>
            </ButtonLink>
          </div>
        </div>

        <div tw="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <OverviewLink href="guides/example">
            <OverviewLinkIcon>
              <Book size="28" tw="text-pink-800" />
            </OverviewLinkIcon>
            <OverviewLinkTextbox tw="">
              <OverviewLinkHeading>Guides</OverviewLinkHeading>
              <OverviewLinkText>
                Step by Step guildes on how to configure and use Resolv.
              </OverviewLinkText>
            </OverviewLinkTextbox>
          </OverviewLink>
          <OverviewLink href="best-practices/example">
            <OverviewLinkIcon>
              <Zap size="28" tw="text-pink-800" />
            </OverviewLinkIcon>
            <OverviewLinkTextbox tw="">
              <OverviewLinkHeading>Best Practices</OverviewLinkHeading>
              <OverviewLinkText>
                How we reccomend you use Resolv to take advantage of all the features.
              </OverviewLinkText>
            </OverviewLinkTextbox>
          </OverviewLink>
        </div>
        <div tw="grid grid-cols-1 mt-14 items-center md:grid-cols-8">
          <div tw="bg-gray-100 rounded-md col-span-5 p-6">
            <div tw="flex text-base font-semibold mb-4">
              <Zap tw="mr-2" /> Contributing
            </div>
            <div>
              <div>
                Feel like a page on this site needs a change? Let us know in our Discord or use the feedback widget!
              </div>
            </div>
          </div>
          <div tw="mt-8 flex flex-col ml-8 col-span-3 gap-4 md:mt-0">
            <OverviewSecondaryLink href="https://discord.gg/resolv">
              <DiscordIcon tw="w-8 h-8" />
              <div>Join our Discord Server </div>
              <ArrowRight />
            </OverviewSecondaryLink>
            <OverviewSecondaryLink href="https://resolvbot.xyz">
              <RssIcon tw="w-8 h-8 text-pink-700" />
              Check out our website <ArrowRight />
            </OverviewSecondaryLink>
            <OverviewSecondaryLink href="https://twitter.com/resolvbot">
              <TwitterIcon tw="w-8 h-8" />
              Follow Us on Twitter <ArrowRight />
            </OverviewSecondaryLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const ButtonLink = styled(Link)`
  ${tw`block font-medium rounded shadow`}
  ${tw`px-3 py-2`}
  ${tw`focus:outline-none`}
`;

const OverviewLink = styled(Link)`
  ${tw`flex border border-gray-100 rounded-md p-6 hover:bg-gray-100 hover:shadow-lg`}
`;

const OverviewLinkIcon = styled.div`
  ${tw`flex border border-pink-200 items-center p-4 h-16 w-16 rounded-md bg-background`}
`;

const OverviewLinkTextbox = styled.div`
  ${tw`ml-6`}
`;

const OverviewLinkHeading = styled.div`
  ${tw`font-semibold text-lg mb-1`}
`;

const OverviewLinkText = styled.div`
  ${tw`font-normal text-base text-gray-600`}
`;

const OverviewSecondaryLink = styled(Link)`
  ${tw`flex items-center gap-2 hover:text-pink-700`}
`;