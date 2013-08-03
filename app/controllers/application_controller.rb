class ApplicationController < ActionController::Base
  protect_from_forgery
  def index
    # Render just the layout since this application is Angular driven
    # our layout/application has all the angular logic and our controllers
    # have no views for themselves. We just need a place to launch from
    # and this happens to be it. So we have no view (thus :nothing => true)
    # but we still want the layout (since it has the App bootstrap code)
    render :layout => 'application', :nothing => true
  end
  
  protected
   def after_sign_in_path_for(resource_or_scope)

    p "===================================="
    # dashboard_index_path
        '#/dashboard'
     # home_index_path
  end




end
