import Image from 'next/image';


export default async function BlogPost({ params }) {
    const post = null;

    if (!post) {
        return (
            <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                    <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-white pt-16">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <header className="mb-12">
                    {post.category && (
                        <span className="inline-block bg-[#C5A028] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            {post.category.split('-').map(word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            ).join(' ')}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-600">
                        <time className="text-[#C5A028] font-semibold">
                            {formatDate(post.publishedAt)}
                        </time>
                        {post.author && (
                            <>
                                <span>•</span>
                                <span>by {post.author}</span>
                            </>
                        )}
                    </div>
                </header>

                {/* Featured Image */}
                {post.mainImage && (
                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
                        <Image
                            src={post.mainImage?.url || ""}
                            alt={post.mainImage.alt || post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Excerpt */}
                {post.excerpt && (
                    <div className="text-xl text-gray-700 mb-8 italic border-l-4 border-[#C5A028] pl-6">
                        {post.excerpt}
                    </div>
                )}

                {/* Body Content */}
                <div className="prose prose-lg max-w-none">

                </div>
            </article>
        </div>
    );
}

// Generate static params for all blog posts

