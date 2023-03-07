import React, { useEffect, useState } from "react";
import {
  createPosts,
  deletePosts,
  getPost,
  getTag,
  updatePosts,
} from "../../service/home";
import { editIcon, deleteIcon } from "../../assets/img/index";
import "./Post.css";
import Dialog from "../Share/Dialog";

export default function Post() {
  const [dataSearch, setDataSearch] = useState({
    page: 0,
    title: null,
    tags: null,
  });
  const [data, setData] = useState(null);
  const [tags, setTags] = useState(null);
  const [isMount, setIsMount] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dataSubmit, setDataSubmit] = useState(null);

  useEffect(() => {
    fetchData();
  }, [dataSearch]);

  const fetchData = async () => {
    const token = localStorage.getItem("accessToken");
    await getPost(dataSearch, token).then((data) => {
      setData(data.posts);
    });
    await getTag(token).then((data) => {
      data.unshift("All");
      setTags(data);
    });
    setIsMount(true);
  };

  const handleDeletePost = (id) => {
    const token = localStorage.getItem("accessToken");
    deletePosts(id, token).then((data) => {
      fetchData();
      alert("Delete post successfully!");
    });
  };

  const handleConfirmDelete = (id) => {
    if (window.confirm("Do you want to delete this post?") == true) {
      handleDeletePost(id);
    }
  };

  const handleCloseDialog = () => {
    setDataSubmit(null);
    setOpenDialog(false);
  };

  const handleSubmitDialog = () => {
    const token = localStorage.getItem("accessToken");
    if (dataSubmit.id) {
      updatePosts(dataSubmit.id, dataSubmit, token).then((data) => {
        fetchData();
        handleCloseDialog();
        alert("Edit post successfully!");
      });
    } else {
      createPosts(dataSubmit, token).then((data) => {
        fetchData();
        handleCloseDialog();
        alert("Add new post successfully!");
      });
    }
  };

  const handleChangeText = (event) => {
    setDataSubmit((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeSelect = (event) => {
    setDataSubmit((preState) => ({
      ...preState,
      tags: event.target.value,
    }));
  };

  const handleEditData = (id) => {
    const findData = data.find((item) => item.id === id);
    setDataSubmit(findData);
    setOpenDialog(true);
  };

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const handleChangeSearch = debounce((event) => {
    if (event.target.value !== "" && event.target.value !== " ") {
      setDataSearch((preState) => ({ ...preState, title: event.target.value }));
    } else {
      setDataSearch((preState) => ({ ...preState, title: null }));
    }
  });

  const handleChangeSelectSearch = (event) => {
    if (event.target.value == "All") {
      setDataSearch((preState) => ({ ...preState, tags: null }));
    } else {
      setDataSearch((preState) => ({ ...preState, tags: event.target.value }));
    }
  };

  return (
    <div>
      {isMount && (
        <>
          <div className="content-header">
            <button
              className="btn btn-primary"
              onClick={() => setOpenDialog(true)}
            >
              Add new
            </button>
            <div className="content-header__actions">
              <input
                type="text"
                placeholder="Title"
                onChange={handleChangeSearch}
              />
              <select onChange={handleChangeSelectSearch}>
                {tags.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="post__table">
            <table>
              <thead>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tag</th>
                <th>Actions</th>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.tags}</td>
                    <td className="table-action">
                      <button onClick={() => handleEditData(item.id)}>
                        <img src={editIcon} alt="" />
                      </button>
                      <button onClick={() => handleConfirmDelete(item.id)}>
                        <img src={deleteIcon} alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Dialog
              title={dataSubmit?.id ? "Edit post" : "Add new post"}
              open={openDialog}
              onSubmit={handleSubmitDialog}
              onClose={handleCloseDialog}
            >
              <div className="form-group">
                <span>Title</span>
                <input
                  className="form-input"
                  name="title"
                  type="text"
                  placeholder="Enter title"
                  value={dataSubmit ? dataSubmit?.title : ""}
                  onChange={handleChangeText}
                />
              </div>
              <div className="form-group">
                <span>Description</span>
                <input
                  className="form-input"
                  name="description"
                  type="text"
                  value={dataSubmit ? dataSubmit?.description : ""}
                  placeholder="Enter description"
                  onChange={handleChangeText}
                />
              </div>
              <div className="form-group">
                <span>Tags</span>
                <select className="form-select" onChange={handleChangeSelect}>
                  {tags.map((item) => (
                    <option
                      value={item}
                      selected={dataSubmit?.tags == item && "selected"}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </Dialog>
          </div>
        </>
      )}
    </div>
  );
}
