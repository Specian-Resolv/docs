import { useRouter } from "next/router";
import React, { useMemo } from "react";
import "twin.macro";
import { Feedback } from "../components/Feedback";
import { Link } from "../components/Link";
import { PageNav } from "../components/PageNav";
import moment from 'moment';
import { SEO } from "../components/SEO";
import { sidebarContent } from "../data/sidebar";
import { FrontMatter } from "../types";
import { Props as PageProps } from "./Page";
import { authors } from './authors';

export interface Props extends PageProps {
  frontMatter: FrontMatter;
}

const getOGImage = (title: string) =>
  `https://og-image11-f745ntzzx-sivu.vercel.app/**${encodeURIComponent(title)}**.png?theme=light&md=1&fontSize=175px&images=https%3A%2F%2Fog-image11.vercel.app%2Fresolvlogo.svg&widths=300&heights=300`;

export const DocsLayout: React.FC<Props> = ({
  frontMatter,
  children,
  ...props
}) => {
  const { pathname } = useRouter();

  // Extract author information from frontMatter
  const { author } = frontMatter;

  // Get author avatar URL
  const avatar = authors.find(a => a.name === author)?.avatar;
  const lastUpdated = moment(frontMatter.date).fromNow();


  // Compute previous and next pages
  const { prevPage, nextPage } = useMemo(() => {
    const sectionIndex = sidebarContent.findIndex(s =>
      s.pages.find(p => p.slug === pathname),
    )!;
    const pageIndex = sidebarContent[sectionIndex].pages.findIndex(
      p => p.slug === pathname,
    );

    const prevSection = sidebarContent[sectionIndex - 1];
    const currentSection = sidebarContent[sectionIndex];
    const nextSection = sidebarContent[sectionIndex + 1];

    const prevPage =
      pageIndex === 0
        ? prevSection != null
          ? prevSection.pages[prevSection.pages.length - 1]
          : null
        : currentSection.pages[pageIndex - 1];

    const nextPage =
      pageIndex === currentSection.pages.length - 1
        ? nextSection != null
          ? nextSection.pages[0]
          : null
        : currentSection.pages[pageIndex + 1];

    return { prevPage, nextPage };
  }, [pathname]);

  return (
    <>
      <SEO
        title={`${frontMatter.title} | Resolv Docs`}
        image={getOGImage(frontMatter.title)}
      />
      <div tw="max-w-full">
        <div tw="flex-auto prose">
          
        <div tw="flex items-center mb-4">
  {/* Display author avatar */}
  {avatar && (
    <img
      tw="w-12 h-12 rounded-full mr-4"
      src={avatar}
      alt={`Avatar of ${author}`}
    />
  )}
  <div>
    {/* Display author name */}
    <div tw="text-lg font-medium">{author}</div>
    {/* Display last updated time */}
    <div tw="text-gray-600 text-sm">Updated {lastUpdated}</div>
  </div>
</div>

      
      <h1>{frontMatter.title}</h1>

      <div className="docs-content">{children}</div>
    </div>

    <Feedback topic={frontMatter.title} />

    <hr tw="my-16" />

    <div
      tw="flex items-center justify-between space-x-4 mb-8 md:mb-16"
      className="prev-next-buttons"
    >
      {prevPage != null ? (
        <Link href={prevPage.slug} tw="hover:text-pink-500">
          <div tw="max-w-full">
            <div tw="text-gray-600 text-sm mb-1">Prev</div>{" "}
            <div tw="font-medium text-lg">{prevPage.title}</div>
</div>
</Link>
) : (
<div />
)}
      {nextPage != null && (
        <Link href={nextPage.slug} tw="hover:text-pink-500">
          <div tw="text-right">
            <div tw="text-gray-600 text-sm mb-1">Next</div>{" "}
            <div tw="font-medium text-lg">{nextPage.title}</div>
          </div>
        </Link>
      )}
    </div>

    <Link
  tw="text-gray-500 text-sm underline hover:text-pink-500"
  href="https://spinalcms.com/"
>
  Powered by SpinalCMS
</Link>

  </div>

  <PageNav title={frontMatter.title} />
</>
);
};