import Herobanner from "@/app/components/shared/hero-banner";
import { getBlogsBySlug } from "@/lib/blogmarkdown";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import './style.css'

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const blog = getBlogsBySlug(slug, ["title", "titlemeta", "keywords",  "descriptionmeta", "detail", "date", "coverImage", "scrolltoread", "description", "galleryImg", "content"]);

    // const siteName = process.env.SITE_NAME || "Your Site Name";
    const authorName = process.env.AUTHOR_NAME || "Your Author Name";

    if (blog) {
        const metadata = {
            title: `${blog.titlemeta}`,
            description: `${blog.descriptionmeta}`,
            keywords: `${blog.keywords}`,
            alternates: {
                canonical: `https://sakne.ru/blog/${slug}`,
            },
            openGraph: {
                title: `${blog.titlemeta}`,
                description: `${blog.descriptionmeta}`,
                url: `https://sakne.ru/blog/${slug}`,
                images: [
                    {
                        url: `/images/logo/WhiteLogo.svg`,
                        alt: `SAKNE`,
                    },
                ],
            }
        };

        return metadata;
    } else {
        return {
            title: "Not Found",
            description: "No blog article has been found",
            author: authorName,
            robots: {
                index: false,
                follow: false,
                nocache: false,
                googleBot: {
                    index: false,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };
    }
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const blog = getBlogsBySlug(slug, ["title", "detail", "date", "coverImage", "scrolltoread", "description", "galleryImg", "content"]);

    const content = await markdownToHtml(blog.content || "");


    return (
        <>
            <section>
                <div>
                    <Herobanner
                        bannerimage={blog?.coverImage}
                        heading={blog?.title}
                        desc={blog?.detail}
                        headingClass="blog-heading" />
                </div>
                <div className="dark:bg-darkblack">
                    <div className="container">
                        <div className="flex flex-col gap-12 md:gap-24 py-20 xl:py-40">
                            
                            <div className="flex justify-end">
                                {content && (
                                    <div dangerouslySetInnerHTML={{ __html: content }} className="blog-content max-w-6xl"></div>
                                )}
                            </div>
                         
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
