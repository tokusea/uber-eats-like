class ApplicationController < ActionController::API
  # --- ここから追加 ---
    before_action :fake_load
    # SPAっぽくするために、ロード時間を追加している。
    def fake_load
      sleep(0.5)
    end
  # --- ここまで追加 ---
  end
  