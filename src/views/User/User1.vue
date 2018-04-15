
<template>
  <div class="hello">
    我是user1
    vuex:{{getCount}}
    <el-tree :data="data5" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button type="text" size="mini" @click="() => append(data)">
            Append
          </el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree>

    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>

  </div>
</template>

<script>
import { user } from "@api/user/index";

let id = 1000;
export default {
    name: "User1",
    data() {
        const data = [
            {
                id: 1,
                label: "一级 1",
                children: [
                    {
                        id: 4,
                        label: "二级 1-1",
                        children: [
                            {
                                id: 9,
                                label: "三级 1-1-1"
                            },
                            {
                                id: 10,
                                label: "三级 1-1-2"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                label: "一级 2",
                children: [
                    {
                        id: 5,
                        label: "二级 2-1"
                    },
                    {
                        id: 6,
                        label: "二级 2-2"
                    }
                ]
            },
            {
                id: 3,
                label: "一级 3",
                children: [
                    {
                        id: 7,
                        label: "二级 3-1"
                    },
                    {
                        id: 8,
                        label: "二级 3-2"
                    }
                ]
            }
        ];
        return {
            data4: JSON.parse(JSON.stringify(data)),
            data5: JSON.parse(JSON.stringify(data)),
            tableData3: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-06',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: []
         
        };
    },
    mounted() {
        user.userf();
    },
    methods: {
        append(data) {
            const newChild = { id: id++, label: "testtest", children: [] };
            if (!data.children) {
                this.$set(data, "children", []);
            }
            data.children.push(newChild);
        },

        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },

        renderContent(h, { node, data, store }) {
            return (
                <span class="custom-tree-node">
                    <span>{node.label}</span>
                    <span>
                        <el-button
                            size="mini"
                            type="text"
                            on-click={() => this.append(data)}
                        >
                            Append
                        </el-button>
                        <el-button
                            size="mini"
                            type="text"
                            on-click={() => this.remove(node, data)}
                        >
                            Delete
                        </el-button>
                    </span>
                </span>
            );
        },
        toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    computed:{
        getCount(){
        return this.$store.state.count;
        }
    }
};
</script>
 
 <style scoped lang="scss">
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
</style>