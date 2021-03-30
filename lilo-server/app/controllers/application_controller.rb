class ApplicationController < ActionController::API
    # before_action :user_valid
    
    def encode_token(user_id)
      # JWT.encode(user_id, 'secret-password')
      JWT.encode user_id, nil, 'none'
    end
  
    def decode_token
      auth_token = request.headers['token']
      if auth_token
        begin
          JWT.decode auth_token, nil, false
        rescue StandardError
          nil
        end
      end
    end
  
    def user_valid
      valid = decode_token
      puts 'valid'
      puts valid
      if valid
        true
      else
        render json: { message: 'Unauthorized' }, status: :unauthorized
      end
    end
  end
  