# class ContactsController < ApplicationController

  class ContactsController < InheritedResources::Base
      respond_to :json
       layout 'admin'

  # GET /contacts
  # GET /contacts.json
  
  skip_before_filter  :verify_authenticity_token
  
  # def index
  #   p "       index---------------------------" 
  #   @contacts = Contact.all

  #   respond_to do |format|
  #     format.html # index.html.erb
  #     format.json { render json: @contacts }
  #   end
  # end

  # # GET /contacts/1
  # # GET /contacts/1.json
  # def show
  #   p "===             show ================"
  #   @contact = Contact.find(params[:id])

  #   respond_to do |format|
  #     format.html # show.html.erb
  #     format.json { render json: @contact }
  #   end
  # end

  # # GET /contacts/new
  # # GET /contacts/new.json
  # def new
  #    p " ----------- new --------------"
  #   @contact = Contact.new

  #   respond_to do |format|
  #     format.html # new.html.erb
  #     format.json { render json: @contact }
  #   end
  # end

  # # GET /contacts/1/edit
  # def edit
  #    p"--------------- edit "
  #   @contact = Contact.find(params[:id])
  # end

  # # POST /contacts
  # # POST /contacts.json
  # def create
  #   p "---------------- create -----------------"
  #   @contact = Contact.new(params[:contact])

  #   respond_to do |format|
  #     if @contact.save
  #       format.html { redirect_to @contact, notice: 'Contact was successfully created.' }
  #       format.json { render json: @contact, status: :created, location: @contact }
  #     else
  #       format.html { render action: "new" }
  #       format.json { render json: @contact.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # PUT /contacts/1
  # # PUT /contacts/1.json
  # def update
  #   p "------------- update -----------"
  #   @contact = Contact.find(params[:id])

  #   respond_to do |format|
  #     if @contact.update_attributes(params[:contact])
  #       format.html { redirect_to @contact, notice: 'Contact was successfully updated.' }
  #       format.json { render json: @contact }
  #     else
  #       format.html { render action: "edit" }
  #       format.json { render json: @contact.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /contacts/1
  # # DELETE /contacts/1.json
  # def destroy
  #   p "--------------destroy "
  #   @contact = Contact.find(params[:id])
  #   @contact.destroy

  #   respond_to do |format|
  #     format.html { redirect_to contacts_url }
  #     format.json { head :no_content }
  #   end
  # end
end
