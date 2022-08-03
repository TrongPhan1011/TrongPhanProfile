import Button from '~/components/Button';
import config from '~/config';

function MyMusic() {
    return (
        <>
            <input type="checkbox" id="my-modal" class="modal-toggle" checked={true} />
            <div class="modal ">
                <div class="modal-box ">
                    <h3 class="font-bold text-center">Thông báo</h3>
                    <p class="py-4">
                        Ứng dụng đang được phát triển. <br /> Vui lòng quay lại sau khi hoàn thiện.
                        <br /> Xin cảm ơn!.
                    </p>
                    <div class="modal-action justify-center">
                        <Button to={config.routeConfig.home} className="btn btn-warning text-white text-xl h-14">
                            Quay lại trang chủ
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyMusic;
