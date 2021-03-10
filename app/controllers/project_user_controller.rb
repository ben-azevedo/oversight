class ProjectUserController < ApplicationController
  def add_user_to_project
    @project = Project.find(params[:id])
    @user = User.find(params[:user_id])

    @project.users << @user
    # -- OR --
    # @users.projects.push(@project)

    render json: @project, include: :users
  end
end
