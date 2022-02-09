class Comment < ApplicationRecord
    validates :body, :commenter_id, :song_id, presence: true

    belongs_to :commenter,
        primary_key: :id,
        foreign_key: :commenter_id,
        class_name: :User

    belongs_to :song,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Song
end