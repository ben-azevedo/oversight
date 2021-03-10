class AssignedProjectsController < ApplicationController
  @user = User.find(params[:id])
  @project = Project.find(params[:project_id])

  @user.projects << @project
  # -- OR --
  # @projects.users.push(@user)

  render json: @user, include: :projects
end