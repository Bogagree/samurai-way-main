import React from 'react';
import style from './Post.module.css'
import user_foto1 from '../../../../assets/images/avatars/user_foto1.jpg'
import user_foto2 from '../../../../assets/images/avatars/2.png'
import post1 from '../../../../assets/images/yello_background with_samurai.jpg'
import {PostType} from "../../../../redux/profile-reducer";

export type PostPropsType = {
    post: PostType
}

export const Post: React.FC<PostPropsType> = (props) => {

    return (
        <>

            <div className={style.post_content} key={props.post.id}>
                <img src={post1} alt="post 1" className={`${style.img_responsive} ${style.post_image}`}/>

                <div className={style.post_container}>

                    <div>
                        <img src={user_foto1} alt="user-foto1"
                             className={`${style.profile_photo_md} ${style.pull_left}`}/>
                        <div className="post-detail">
                            <p>post description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, illo.</p>
                        </div>

                        <div className="user-info">
                            <h5><a href="#" className="profile-link">Dmitry B.</a> <span
                                className="following">following</span></h5>
                            <p className="text-muted">Published a post {props.post.published}</p>
                        </div>

                        <div className="reaction">
                            <a className={`${style.btn} ${style.text_green}`}><i
                                className={`${style.icon} ${style.ion_thumbsup}`}></i> {props.post.likesCount} <img
                                src="#"
                                alt=""/></a>
                            <a className="btn text-red"><i
                                className={`${style.fa} ${style.fa_thumbs_down}`}></i> {props.post.disLikesCount} </a>
                        </div>

                        <div className="line-divider"></div>
                        <div className="post-text">
                            <p><i className="em em-thumbsup"></i> <i className="em em-thumbsup"></i>{props.post.message}
                            </p>
                        </div>
                        <div className="line-divider"></div>
                        <div className="post-comment">
                            <img src={user_foto2} alt=""
                                 className={style.profile_photo_sm}/>
                            <p><a href="#" className="profile-link">Cris </a> Это текст коммента, который
                                еще не добавлен в пропсы."<i
                                    className="em em-muscle"></i></p>

                        </div>
                        <div className="post-comment">
                            <img src="#" alt="" className="profile-photo-sm"/>
                            <input name="comment-post" type="text" className="form-control" placeholder="Post a comment"/>
                            <button>comment</button>

                        </div>
                    </div>
                </div>s
            </div>
            )


        </>
    );
};

