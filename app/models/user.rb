class User < ApplicationRecord
mount_uploader :image, PictureUploader
end
