import './AuthorCard.css';

export default function AuthorCard(author) {

    return (
        <div className='authorCard'>
            <div className='authorImageWrapper'>
                <img className='authorImage' src={author.profileImage} alt={author.displayName}/>
            </div>
            <div className='authorTitle'>
            <div className='authorName'>
                Author: {author.displayName}
            </div>
            <div className='authorPrefix'>
                {author.prefix}
                </div>
            </div>
        </div>
    )
}