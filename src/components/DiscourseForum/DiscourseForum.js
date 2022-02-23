import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

export default function DiscourseForum(topicId) {
    // let { topicId } = useParams();
    const id = topicId;

    useEffect(() => {

        window.DiscourseEmbed = {
            discourseUrl: 'https://puppyed.trydiscourse.com/',
            topicId: id,
        };

        const d = document.createElement('script');
        d.type = 'text/javascript';
        d.async = true;
        d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
    }, [id]);

    return (
        <div>
            <div id="discourse-comments"></div>
        </div>
    );
}
