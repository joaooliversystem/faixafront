"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
function Feed() {

    const [name, setName] = useState('');
    const [postPastTime, setPostPastTime] = useState('');
    const [descriptionBellowName, setDescriptionBellowName] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [likes, setLikes] = useState(0);
    const [numberOfComments, setNumberOfComments] = useState(0);
    const [numberOfShares, setNumberOfShares] = useState(0);
    const [comments, setComments] = useState<any>([]);
    const pathname = usePathname();
    const companionId = pathname.split('/').pop();
    // const companionId = localStorage.getItem('companionId');
    const apiUrl = process.env.API_URL + 'companion/feed/' + companionId;

    useEffect(() => {
        if (localStorage.getItem('newCompanion') === 'true') {
            localStorage.removeItem('newCompanion');
        }
        FetchFeedData();
    }, [])

    // Api feed data fetch function
    async function FetchFeedData() {

        try {
            const response = await fetch(
                apiUrl,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'text/plain'
                    }
                });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const dataJson = await response.text();
            const data = JSON.parse(dataJson);

            // Setting states

            setDescriptionBellowName(data.descriptionBellowName);
            setName(data.name);
            setPostPastTime(data.postPastTime);
            setPostDescription(data.postDescription);
            setLikes(data.likes);
            setNumberOfComments(data.numberOfComments);
            setNumberOfShares(data.numberOfShares)
            setComments(data.comments['$values']);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <div>
            {/* <div>{params.companionId}</div> */}
            <div className="card">
                {/* Card header START */}
                <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            {/* Avatar */}
                            <div className="avatar avatar-story me-2">
                                <a href="#!">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="/files/images/advertiser_image_1.jpeg"
                                        alt="Perfil"
                                    />
                                </a>
                            </div>
                            {/* Info */}
                            <div>
                                <div className="nav nav-divider">
                                    <h6 className="nav-item card-title mb-0">
                                        <a href="#!"> {name} </a>
                                    </h6>
                                    <span className="nav-item small"> {postPastTime} hr</span>
                                </div>
                                <p className="mb-0 small">
                                    <i>{descriptionBellowName}</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card header END */}
                {/* Card body START */}
                <div className="card-body">
                    <p>
                        {postDescription}
                    </p>
                    {/* Card img */}
                    <img
                        className="card-img"
                        src="/files/images/advertiser_image_5.jpeg"
                        alt="Post"
                    />
                    {/* Feed react START */}
                    <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                            <a className="nav-link active" href="#!">
                                <i className="bi bi-hand-thumbs-up-fill pe-1" />
                                Likes ({likes})
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">
                                {" "}
                                <i className="bi bi-chat-fill pe-1" />
                                Comentários ({numberOfComments})
                            </a>
                        </li>
                        {/* Card share action START */}
                        <li className="nav-item ms-sm-auto">
                            <a className="nav-link mb-0" href="#">
                                <i className="bi bi-reply-fill flip-horizontal ps-1" />
                                Compatilhados ({numberOfShares})
                            </a>
                        </li>
                        {/* Card share action END */}
                    </ul>
                    {/* Feed react END */}
                    {/* Add comment */}
                    <div className="d-flex mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs me-2">
                            <a href="#!">
                                <img
                                    className="avatar-img rounded-circle"
                                    src="/assets/images/avatar/07.jpg"
                                    alt='alt'
                                />
                            </a>
                        </div>
                        {/* Comment box  */}
                        <form className="position-relative w-100">
                            <textarea
                                className="form-control pe-4 bg-light"
                                rows={1}
                                placeholder="Adicionar comentário..."
                                defaultValue={""}
                            />
                        </form>
                    </div>
                    {/* Comment wrap START */}
                    <ul className="comment-wrap list-unstyled">
                        {comments.map((comment: any, index: any) => (
                            <li key={index} className="comment-item">
                                <div key={index} className="d-flex position-relative">
                                    {/* Avatar */}
                                    <div key={index} className="avatar avatar-xs">
                                        <a key={index} href="#!">
                                            <img
                                                key={index}
                                                className="avatar-img rounded-circle"
                                                src="/assets/images/avatar/05.jpg"
                                                alt='alt'
                                            />
                                        </a>
                                    </div>
                                    <div
                                        key={index}
                                        className="ms-2">
                                        {/* Comment by */}
                                        <div
                                            key={index}
                                            className="bg-light rounded-start-top-0 p-3 rounded">
                                            <div
                                                key={index}
                                                className="d-flex justify-content-between">
                                                <h6
                                                    key={index}
                                                    className="mb-1">
                                                    <a href="#!"> {comments[index].name} </a>
                                                </h6>
                                                <small
                                                    key={index}
                                                    className="ms-2">{comments[index].pastTime}h</small>
                                            </div>
                                            <p
                                                key={index}
                                                className="small mb-0">
                                                {comments[index].comment}
                                            </p>
                                        </div>
                                        {/* Comment react */}
                                        <ul
                                            key={index}
                                            className="nav nav-divider py-2 small">
                                            <li
                                                key={index}
                                                className="nav-item">
                                                <a
                                                    key={index}
                                                    className="nav-link" href="#!">
                                                    <i
                                                        key={index}
                                                        className="bi bi-hand-thumbs-up-fill pe-1" />
                                                    Likes ({comments[index].likes})
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* Comment wrap END */}
                </div>
                {/* Card body END */}
                {/* Card footer START */}
                <div className="card-footer border-0 pt-0">
                    {/* Load more comments */}
                    <a
                        href="#!"
                        role="button"
                        className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                        data-bs-toggle="button"
                        aria-pressed="true"
                    >
                        <div className="spinner-dots me-2">
                            <span className="spinner-dot" />
                            <span className="spinner-dot" />
                            <span className="spinner-dot" />
                        </div>
                        Load more comments
                    </a>
                </div>
                {/* Card footer END */}
            </div>
        </div>
    );
}

export default Feed;
