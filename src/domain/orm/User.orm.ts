import { userEntity } from "../entities/User.entitiy";

import { LogError, LogSuccess } from "@/utils/logger";

// CRUD

/**
 * Method to obtain all users from Collection "Users" in Mongo Server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
  try {
    let userModel = userEntity();

    // Search all users
    return await userModel.find({isDelete: false})

  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Users: ${error}`)
  }

}

// TODO:
// - Get User By ID
// - Get User By Email
// - Delete User By ID
// - Create New User 
// - Update User By ID 