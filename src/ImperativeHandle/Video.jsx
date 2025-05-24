import { forwardRef, useImperativeHandle, useRef } from 'react';
// Import forwardRef để cho phép nhận ref từ cha
// Import useImperativeHandle để tuỳ chỉnh ref
// Import useRef để tham chiếu đến thẻ video thực tế

import video1 from '../videos/video-1.mp4'
// Import đường dẫn video (đảm bảo file tồn tại và đúng định dạng)

function Video(props, ref) {
    const videoRef = useRef();
    // Tạo ref để truy cập thẻ <video> trong DOM

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
            // Khi gọi ref.current.play() từ App, thực tế là gọi DOM video.play()
        },
        pause() {
            videoRef.current.pause();
            // Khi gọi ref.current.pause() từ App, thực tế là gọi DOM video.pause()
        }
    }));
    // Tuỳ chỉnh giá trị mà ref từ component cha nhận được

    return (
        <video
            ref={videoRef}
            // Gắn ref tới thẻ video để thao tác play/pause

            src={video1}
            // Đường dẫn đến video file

            width={280}
            // Đặt chiều rộng video
        />
    )
}

export default forwardRef(Video);
// Dùng forwardRef để truyền ref từ cha xuống component con
